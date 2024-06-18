// import { unstable_noStore } from "next/cache";

import Messages from "@/components/Messages/Messages";

// export const revalidate = 5;
// export const dynamic = "force-dynamic";

const MessagesPage = async () => {
  // unstable_noStore();
  const response = await fetch("http://localhost:8080/messages");
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
};

export default MessagesPage;
