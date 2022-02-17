import Link from "next/link";
import StarIcon from "./icons/StarIcon";

const ProductStars = ({ score, link = false }) => {
  if (link) {
    return (
      <Link href="/">
        <a>
          <StarIcon className="text-yellow-500" />
        </a>
      </Link>
    );
  } else {
    return (
      <div className="flex items-center text-base">
        <StarIcon height={18} className="text-teal" />
        {score}/5
      </div>
    );
  }
};

export default ProductStars;
