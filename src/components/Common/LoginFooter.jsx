import React from "react";

const LoginFooter = () => {
  return (
    <>
      <div class="nk-block nk-auth-footer">
        <div class="nk-block-between">
          <ul class="nav nav-sm">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Terms & Condition
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Privacy Policy
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Help
              </a>
            </li>
            {/* <li class="nav-item dropup">
                          <a
                            class="dropdown-toggle dropdown-indicator has-indicator nav-link"
                            data-bs-toggle="dropdown"
                            data-offset="0,10"
                          >
                            <small>English</small>
                          </a>
                          <div class="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                            <ul class="language-list">
                              <li>
                                <a href="#" class="language-item">
                                  <img
                                    src="/assets/images/flags/english.png"
                                    alt=""
                                    class="language-flag"
                                  />
                                  <span class="language-name">English</span>
                                </a>
                              </li>
                              <li>
                                <a href="#" class="language-item">
                                  <img
                                    src="/assets/images/flags/spanish.png"
                                    alt=""
                                    class="language-flag"
                                  />
                                  <span class="language-name">Español</span>
                                </a>
                              </li>
                              <li>
                                <a href="#" class="language-item">
                                  <img
                                    src="/assets/images/flags/french.png"
                                    alt=""
                                    class="language-flag"
                                  />
                                  <span class="language-name">Français</span>
                                </a>
                              </li>
                              <li>
                                <a href="#" class="language-item">
                                  <img
                                    src="/assets/images/flags/turkey.png"
                                    alt=""
                                    class="language-flag"
                                  />
                                  <span class="language-name">Türkçe</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li> */}
          </ul>
        </div>
        <div class="mt-3">
          <p>&copy; 2023 DashLite. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default LoginFooter;
