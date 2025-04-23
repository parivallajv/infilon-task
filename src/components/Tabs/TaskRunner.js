import { useState } from "react";
import { Input, Button, Typography, Card } from "antd";
import "../styles.scss";

const { Title } = Typography;

// Hello Task Runner

const TaskRunner = () => {
  const [num, setNum] = useState(0);
  const [messages, setMessages] = useState([]);

  const recursivePrint = (n, arr = []) => {
    if (n <= 0) {
      return [...arr, "STOP"];
    }
    return recursivePrint(n - 1, [...arr, "Hello Task"]);
  };

  const handleRun = () => {
    setMessages(recursivePrint(Number(num)));
  };

  return (
    <div className="task-runner-container">
      <Title level={3}>Recursive Task Runner</Title>

      <div className="input-group">
        <Input
          type="number"
          placeholder="Enter a number"
          onChange={(e) => setNum(e.target.value)}
          className="task-input"
        />
        <Button type="primary" onClick={handleRun}>
          Run Task
        </Button>
      </div>

      <div className="messages">
        {messages.map((msg, idx) => (
          <Card size="small" className="message-card" key={idx}>
            {msg}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TaskRunner;
