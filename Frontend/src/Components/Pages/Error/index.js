import { ErrorContainer, ErrorBox, ErrorText } from "./NotFoundElements";
const NotFound = () => {
  return (
    <ErrorContainer>
      <ErrorBox>
        <ErrorText>Page Not Found</ErrorText>
      </ErrorBox>
    </ErrorContainer>
  );
};

export default NotFound;
