import styled from "@emotion/styled";

interface ICardProps {
  /** The component children. */
  children?: any;
  /** The `className` applied to the containing node. */
  className?: string;
}

const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
`;

const Card: React.FC<ICardProps> = (props: ICardProps) => {
  const { children, className } = props;

  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Card;
