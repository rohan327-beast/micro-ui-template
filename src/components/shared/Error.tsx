const ErrorPage: React.FC<Error> = (props: Error) => {
  return <div>Error: Something went wrong! {props.message}</div>;
};

export default ErrorPage;
