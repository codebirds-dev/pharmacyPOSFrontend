import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const UserActionModalHeader = () => {
  const modalRef = useRef(null);
  const modalButtonRef = useRef(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const [toggleUserActionModal, setToggleUserActionModal] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        modalButtonRef.current &&
        !modalButtonRef.current.contains(event.target)
      ) {
        setToggleUserActionModal(false);
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

  useEffect(() => {
    console.log("🚀 ~ useEffect ~ modalButtonRef:", modalButtonRef);
  }, [modalButtonRef]);

  return (
    <>
      <li className="dropdown user-dropdown">
        <Link
          href=""
          className={`dropdown-toggle mr-n1${
            toggleUserActionModal ? " show" : ""
          }`}
          data-bs-toggle="dropdown"
          onClick={(e) => {
            e.preventDefault();
            setToggleUserActionModal(!toggleUserActionModal);
          }}
          aria-expanded={toggleUserActionModal}
          ref={modalButtonRef}
        >
          <div className="user-toggle">
            <div className="user-avatar sm">
              <em className="icon ni ni-user-alt"></em>
            </div>
          </div>
        </Link>
        <div
          className={`dropdown-menu dropdown-menu-md dropdown-menu-end${
            toggleUserActionModal ? " show custom-user-modal-action" : ""
          }`}
          ref={modalRef}
        >
          <div className="dropdown-inner user-card-wrap bg-lighter">
            <div className="user-card">
              <div className="user-avatar">
                <span>AB</span>
              </div>
              <div className="user-info">
                <span className="lead-text">Abu Bin Ishtiyak</span>
                <span className="sub-text">info@softnio.com</span>
              </div>
            </div>
          </div>
          <div className="dropdown-inner">
            <ul className="link-list">
              <li>
                <a href="html/pharmacy/members-profile-regular.html">
                  <em className="icon ni ni-user-alt"></em>
                  <span>View Profile</span>
                </a>
              </li>
              <li>
                <a href="html/pharmacy/general-settings.html">
                  <em className="icon ni ni-setting-alt"></em>
                  <span>Account Setting</span>
                </a>
              </li>
              <li>
                <a href="html/pharmacy/account-log.html">
                  <em className="icon ni ni-activity-alt"></em>
                  <span>Login Activity</span>
                </a>
              </li>
              <li>
                <a className="dark-switch" href="#">
                  <em className="icon ni ni-moon"></em>
                  <span>Dark Mode</span>
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
      </li>
    </>
  );
};

export default UserActionModalHeader;
