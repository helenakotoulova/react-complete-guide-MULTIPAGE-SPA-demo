import { Link } from "react-router-dom";

const Products = () => {
  //const navigate = useNavigate();
  //navigate('/welcome'); // defaultni je push, pokud chceme replace, tak dame navigate('/wlecome', {replace: true})
  // navigate(-1); // to nas posune na previous page. -2 by byla previous the previous page. 1 -> forward.

  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpe</Link>t
        </li>
        <li>
          <Link to="/products/p3">An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
