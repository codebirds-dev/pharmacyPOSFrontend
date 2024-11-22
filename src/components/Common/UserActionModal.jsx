import { setLogout } from "@/redux/features/authSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const UserActionModal = () => {
  const modalRef = useRef(null);
  const modalButtonRef = useRef(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const [activeActionModal, setActiveActionModal] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        modalButtonRef.current &&
        !modalButtonRef.current.contains(event.target)
      ) {
        setActiveActionModal(false);
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const logoutHandler = () => {
    dispatch(setLogout());
    router.push("/login");
  };
  return (
    <>
      <div className="nk-sidebar-profile nk-sidebar-profile-fixed">
        <Link
          href=""
          className={`toggle${activeActionModal ? " active" : ""}`}
          data-target="profileDD"
          onClick={(e) => {
            e.preventDefault();
            setActiveActionModal(!activeActionModal);
          }}
          ref={modalButtonRef}
        >
          <div className="user-avatar">
            <span>AB</span>
          </div>
        </Link>
        <div
          className={`dropdown-menu dropdown-menu-md m-1 nk-sidebar-profile-dropdown${
            activeActionModal ? " content-active" : ""
          }`}
          data-content="profileDD"
          ref={modalRef}
        >
          <div className="dropdown-inner user-card-wrap d-none d-md-block">
            <div className="user-card">
              <div className="user-avatar">
                <span>AB</span>
              </div>
              <div className="user-info">
                <span className="lead-text">Abu Bin Ishtiyak</span>
                <span className="sub-text text-soft">info@softnio.com</span>
              </div>
            </div>
          </div>
          <div className="dropdown-inner">
            <ul className="link-list">
              <li>
                <a href="html/user-profile-regular.html">
                  <em className="icon ni ni-user-alt"></em>
                  <span>View Profile</span>
                </a>
              </li>
              <li>
                <Link href="/dashboard/user-profile-setting">
                  <em className="icon ni ni-setting-alt"></em>
                  <span>Account Setting</span>
                </Link>
              </li>
              <li>
                <a href="html/user-profile-activity.html">
                  <em className="icon ni ni-activity-alt"></em>
                  <span>Login Activity</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown-inner">
            <ul className="link-list">
              <li>
                <Link
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("clicked");
                    logoutHandler();
                  }}
                >
                  <em className="icon ni ni-signout"></em>
                  <span>Sign out</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserActionModal;
