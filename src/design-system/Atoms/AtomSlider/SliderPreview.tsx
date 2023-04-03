import { Slider } from "@mantine/core"

const SliderPreview = () => {
  return <Slider marks={[{ value: 20 }, { value: 50 }, { value: 80 }]} w="100%" maw={400} />
}

export default SliderPreview
