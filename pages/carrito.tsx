import Image from "next/image";

const carrito = () => {
  const product = {
    id: "0",
    name: "Mouse",
    img: "/contentDemo/Mouse/MS1006/1.png",
    price: "259",
    score: "3",
  };
  return (
    <div className="container flex items-center justify-center h-full mx-auto">
      <div className="max-w-4xl card">
        <div>
          <Image
            src={`${product.img}`}
            alt={`${product.name}`}
            width={`128`}
            height={`128`}
          />
        </div>
      </div>
    </div>
  );
};

export default carrito;
