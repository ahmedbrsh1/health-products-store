import Image, { StaticImageData } from "next/image";

const OrderItem: React.FC<{
  image: string;
  title: string;
  size: number;
  quantity: number;
  total: number;
}> = (props) => {
  return (
    <li className="flex justify-between items-center border-b border-neutral-200 py-4 last:border-none">
      <div className="flex gap-4 items-center">
        <img className="max-w-28" src={props.image} alt="Product Image" />
        <div>
          <h5>{props.title}</h5>
          <p className="text-sm !text-neutral-500 mb-4">Size: {props.size}ml</p>
          <p className="bg-neutral-200 rounded-full w-fit px-2 py-0.5 text-sm">
            x{props.quantity} Items
          </p>
        </div>
      </div>
      {props.total}
    </li>
  );
};

export default OrderItem;
