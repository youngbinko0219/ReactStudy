import React from "react";

function MemberItem({ member, onClick }) {
  return (
    <li className="d-flex justify-content-between mb-4" onClick={onClick}>
      <img
        src={member.avatar}
        alt="avatar"
        className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
        width="60"
      />
      <div className="card mask-custom w-100">
        <div
          className="card-header d-flex justify-content-between p-3"
          style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.3)" }}
        >
          <p className="fw-bold mb-0">{member.name}</p>
        </div>
      </div>
    </li>
  );
}

export default MemberItem;
