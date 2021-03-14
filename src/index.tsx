import * as React from "react";
import { Dispatch, DispatchWithoutAction, useState } from "react";
import useHotkeys from "@reecelucas/react-use-hotkeys";

export type Options = Partial<{
  keys: Partial<{
    up: string;
    down: string;
    select: string;
  }>;
  events: Partial<{
    onDown: DispatchWithoutAction;
    onUp: DispatchWithoutAction;
  }>;
}>;

const DEFAULT_OPTIONS: Options = {
  keys: {
    up: "ArrowUp",
    down: "ArrowDown",
    select: "Enter"
  }
};

export const useListHotkeys = <T,>(
  data: Array<T> | null,
  onSelect: Dispatch<{ item: T; index: number }>,
  optionsOverride?: Options
) => {
  const options = { ...DEFAULT_OPTIONS, ...optionsOverride };
  const [selectedIndex, setSelectedIndex] = useState(0);

  useHotkeys(options.keys!.down!, (e) => {
    if (data) {
      setSelectedIndex(Math.min(data?.length - 1, selectedIndex + 1));
    }
    if (options.events?.onDown) {
      options.events?.onDown();
    }
  });

  useHotkeys(options.keys!.up!, (e) => {
    if (data) {
      setSelectedIndex(Math.max(0, selectedIndex - 1));
      if (options.events?.onUp) {
        options.events?.onUp();
      }
    }
  });

  useHotkeys(options.keys!.select!, (e) => {
    if (data) {
      onSelect({ item: data[selectedIndex], index: selectedIndex });
    }
  });

  return [selectedIndex, setSelectedIndex];
};
