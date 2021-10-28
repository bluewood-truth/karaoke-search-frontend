import { Button, Flex } from "components/basic";

const UserNav = () => {
  return (
    <Flex zIndex='nav'>
      <Button>마이리스트</Button>
      <Button>로그인</Button>
    </Flex>
  );
}

export default UserNav;
