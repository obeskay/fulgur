import Link from "next/link";

// Componente de react que renderiza una lista de breadcrumbs
const Breadcrumbs = ({ crumbs }) => {
  // Array of breadcrumbs components
  const crumbsComponents = crumbs?.map((crumb, index) => {
    // If the crumb is the last one, it doesn't have a link
    if (index === crumbs.length - 1) {
      return (
        <li key={index} className="inline-block">
          <span className="">{crumb.name}</span>
        </li>
      );
    } else {
      return (
        <li key={index} className="inline-block">
          <Link href={crumb.href}>
            <a className="">{crumb.name}</a>
          </Link>
        </li>
      );
    }
  });

  return <ul>{crumbsComponents}</ul>;
};

export default Breadcrumbs;
