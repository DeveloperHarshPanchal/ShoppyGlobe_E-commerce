import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  return (
    <section className="container not-found">
      <h1 className="page-title">404 - Page Not Found</h1>
      <p className="muted-text">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      {error && (
        <pre className="error-details">
          {error.status} {error.statusText || error.message}
        </pre>
      )}
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </section>
  );
};

export default NotFound;
