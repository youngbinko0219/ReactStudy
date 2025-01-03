import MemberItem from "./MemberItem";
import "../chat.css";

const members = [
  {
    name: "John Doe",
    message: "Hello, Are you there?",
    time: "Just now",
    avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp",
    unreadCount: 1,
  },
  {
    name: "Danny Smith",
    message: "Lorem ipsum dolor sit.",
    time: "5 mins ago",
    avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp",
  },
  {
    name: "Alex Steward",
    message: "Lorem ipsum dolor sit.",
    time: "Yesterday",
    avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp",
  },
  {
    name: "Ashley Olsen",
    message: "Lorem ipsum dolor sit.",
    time: "Yesterday",
    avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp",
  },
  {
    name: "Kate Moss",
    message: "Lorem ipsum dolor sit.",
    time: "Yesterday",
    avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp",
  },
  {
    name: "Lara Croft",
    message: "Lorem ipsum dolor sit.",
    time: "Yesterday",
    avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp",
  },
  {
    name: "Brad Pitt",
    message: "Lorem ipsum dolor sit.",
    time: "5 mins ago",
    avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp",
    status: "read",
  },
];

function MemberList() {
  return (
    <div className="card mask-custom">
      <div className="card-body">
        <ul className="list-unstyled mb-0">
          {members.map((member, index) => (
            <MemberItem key={index} member={member} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MemberList;
