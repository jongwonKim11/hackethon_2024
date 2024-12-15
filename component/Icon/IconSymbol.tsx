import Feather from "@expo/vector-icons/Feather";

interface IIcon {
  size?: number,
  color: string,
  name: string,
  IconComponent?: any,
}
const IconSymbol = (
  {
    IconComponent=Feather,
    color,
    name,
    size=24
  }: IIcon
) => {
   return (<IconComponent color={color} size={size} name={name} />);
}

export default IconSymbol