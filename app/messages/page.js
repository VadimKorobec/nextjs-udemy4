// import { unstable_noStore } from "next/cache";

import Messages from "@/components/Messages/Messages";
import { getMessages } from "@/lib/messages";

// export const revalidate = 5;
// export const dynamic = "force-dynamic";

const MessagesPage = async () => {
  // unstable_noStore();
  // const response = await fetch("http://localhost:8080/messages", {
  //   next:{tags:['msg']}
  // });
  // const messages = await response.json();

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
};

export default MessagesPage;
