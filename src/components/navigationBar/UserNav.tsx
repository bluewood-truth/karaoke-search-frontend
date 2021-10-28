import { Button, Flex } from "components/basic";
import { useHistory } from "react-router";

const UserNav = () => {
  const history = useHistory();
  const toMyList = () => {
    history.push('/myList');
  }

  return (
    <Flex zIndex='nav'>
      <Button onClick={toMyList}>마이리스트</Button>
      <Button>로그인</Button>
    </Flex>
  );
}

export default UserNav;
