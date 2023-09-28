import React from 'react';
import * as Slider from '@radix-ui/react-slider';
import { styled } from 'styled-components';

const SliderRoot = styled(Slider.Root)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 200px;
  height: 20px;
`;

const SliderTrack = styled(Slider.Track)`
  background-color: var(--black-a10);
  position: relative;
  flex-grow: 1;
  border-radius: 9999px;
  height: 3px;
`;

const SliderRange = styled(Slider.Range)`
  position: absolute;
  background-color: white;
  border-radius: 9999px;
  height: 100%;
`;

const SliderThumb = styled(Slider.Thumb)`
  display: block;
  width: 10px;
  height: 10px;
  background-color: white;
  box-shadow: 0 2px 10px var(--black-a7);
  border-radius: 10px;
  transition: 0.3s;

  &:hover {
    && {
      height: 20px;
      width: 20px;
      background-color: var(--violet-3);
    }
  }
  &:focus-visible {
    && {
      outline: none;
    }
  }
`;

const GnodeSlider = () => (
  <form>
    <SliderRoot className="SliderRoot" defaultValue={[50]} max={100} step={1}>
      <SliderTrack className="SliderTrack">
        <SliderRange className="SliderRange" />
      </SliderTrack>
      <SliderThumb className="SliderThumb" aria-label="Volume" />
    </SliderRoot>
  </form>
);

export default GnodeSlider;
