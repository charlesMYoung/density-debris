import { useRef } from "react";

export interface UseRafFnCallbackArguments {
  /**
   * Time elapsed between this and the last frame.
   */
  delta: number;

  /**
   * Time elapsed since the creation of the web page. See {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp#the_time_origin Time origin}.
   */
  timestamp: DOMHighResTimeStamp;
}

export interface UseRafFnOptions {
  /**
   * Start the requestAnimationFrame loop immediately on creation
   *
   * @default true
   */
  immediate?: boolean;
  /**
   * The maximum frame per second to execute the function.
   * Set to `undefined` to disable the limit.
   *
   * @default undefined
   */
  fpsLimit?: number;
}

/**
 * Call function on every `requestAnimationFrame`. With controls of pausing and resuming.
 *
 * @see https://vueuse.org/useRafFn
 * @param fn
 * @param options
 */
export function useRafFn(
  fn: (args: UseRafFnCallbackArguments) => void,
  options: UseRafFnOptions = {}
) {
  const { immediate = true, fpsLimit = undefined, window = window } = options;

  const isActive = useRef<boolean>(false);
  const intervalLimit = fpsLimit ? 1000 / fpsLimit : null;
  let previousFrameTimestamp = 0;
  let rafId: null | number = null;

  function loop(timestamp: DOMHighResTimeStamp) {
    if (!isActive.current || !window) return;

    if (!previousFrameTimestamp) previousFrameTimestamp = timestamp;

    const delta = timestamp - previousFrameTimestamp;

    if (intervalLimit && delta < intervalLimit) {
      rafId = window.requestAnimationFrame(loop);
      return;
    }

    previousFrameTimestamp = timestamp;
    fn({ delta, timestamp });
    rafId = window.requestAnimationFrame(loop);
  }

  function resume() {
    if (!isActive.current && window) {
      isActive.current = true;
      previousFrameTimestamp = 0;
      rafId = window.requestAnimationFrame(loop);
    }
  }

  function pause() {
    isActive.current = false;
    if (rafId != null && window) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  if (immediate) resume();

  return {
    isActive: isActive,
    pause,
    resume,
  };
}
