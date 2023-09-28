import GnodeBase from '../NodeBase';
import SliderElement from './SliderElement';

interface CustomNodeProps {
  id: string;
  data: {
    value: number;
    onChange: (value: number) => void;
  };
}

export const NumberSlider = ({ id, data }: CustomNodeProps) => {
  // const node = useStoreState((store) => store.nodes[id]);
  const handleSliderChange = (value: number[]) => {
    data.onChange(value[0]);
  };
  return (
    <GnodeBase lConnCount={0} rConnCount={1}>
      <SliderElement></SliderElement>
    </GnodeBase>
  );
};
