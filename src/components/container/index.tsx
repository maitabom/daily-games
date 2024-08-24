import ContainerProperties from "./props";

export default function Container({ children }: ContainerProperties) {
  return <div className="max-w-screen-xl mx-auto px-3">{children}</div>;
}
