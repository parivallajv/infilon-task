import { Button, Card, Avatar, Row, Col, Flex } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/actions";
import { useEffect } from "react";
import "../styles.scss";

// Users list details

const UsersList = ({ switchToTabThree }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userData.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleClick = () => {
    switchToTabThree();
  };

  return (
    <div className="users-list-container">
      <Flex justify="space-between" align="center">
        <h2 className="title">Fetched Users</h2>

        <Button type="primary" onClick={handleClick}>
          Task Runner
        </Button>
      </Flex>

      <Row gutter={[16, 16]}>
        {users.map((user) => (
          <Col xs={28} sm={12} md={8} lg={8} key={user.id}>
            <Card hoverable className="user-card">
              <Card.Meta
                avatar={<Avatar src={user.avatar} size={64} />}
                title={`${user.first_name} ${user.last_name}`}
                description={user.email}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UsersList;
