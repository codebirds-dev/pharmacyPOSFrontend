import LoginFooter from "@/components/Common/LoginFooter";
import LoginSlider from "@/components/Common/LoginSlider";
import { Form } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const router = useRouter();
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);

  const onFinish = async (values) => {
    console.log("Success: ", values);
    // let { username, password } = values;
    // setIsLoading(true);
    // try {
    //   let result = await requestHandler("POST", "auth/login", {
    //     username,
    //     password,
    //   });
    //   dispatch(setUser(result?.data));
    //   router.push("/dashboard");
    // } catch (error) {
    //   console.error("Login error: ", error);
    //   setIsLoading(false);
    // }
  };
  return (
    <>
      <div class="nk-app-root">
        <div class="nk-main ">
          <div class="nk-wrap nk-wrap-nosidebar">
            <div class="nk-content ">
              <div class="nk-split nk-split-page nk-split-lg">
                <div class="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white w-lg-45">
                  <div class="absolute-top-right d-lg-none p-3 p-sm-5">
                    <a
                      href="#"
                      class="toggle btn btn-white btn-icon btn-light"
                      data-target="athPromo"
                    >
                      <em class="icon ni ni-info"></em>
                    </a>
                  </div>
                  <div class="nk-block nk-block-middle nk-auth-body">
                    <div class="brand-logo pb-5">
                      <Link href="/" class="logo-link">
                        <img
                          class="logo-light logo-img logo-img-lg"
                          src="/assets/images/logo.png"
                          srcset="/assets/images/logo2x.png 2x"
                          alt="logo"
                        />
                        <img
                          class="logo-dark logo-img logo-img-lg"
                          src="/assets/images/logo-dark.png"
                          srcset="/assets/images/logo-dark2x.png 2x"
                          alt="logo-dark"
                        />
                      </Link>
                    </div>
                    <div class="nk-block-head">
                      <div class="nk-block-head-content">
                        <h5 class="nk-block-title">Register</h5>
                        <div class="nk-block-des">
                          <p>Create New Dashlite Account</p>
                        </div>
                      </div>
                    </div>
                    <form action="html/pages/auths/auth-success.html">
                      <div class="form-group">
                        <label class="form-label" for="name">
                          Name
                        </label>
                        <div class="form-control-wrap">
                          <input
                            type="text"
                            class="form-control form-control-lg"
                            id="name"
                            placeholder="Enter your name"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="form-label" for="email">
                          Email or Username
                        </label>
                        <div class="form-control-wrap">
                          <input
                            type="text"
                            class="form-control form-control-lg"
                            id="email"
                            placeholder="Enter your email address or username"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="form-label" for="password">
                          Passcode
                        </label>
                        <div class="form-control-wrap">
                          <a
                            tabindex="-1"
                            href="#"
                            class="form-icon form-icon-right passcode-switch lg"
                            data-target="password"
                          >
                            <em class="passcode-icon icon-show icon ni ni-eye"></em>
                            <em class="passcode-icon icon-hide icon ni ni-eye-off"></em>
                          </a>
                          <input
                            type="password"
                            class="form-control form-control-lg"
                            id="password"
                            placeholder="Enter your passcode"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="custom-control custom-control-xs custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="checkbox"
                          />
                          <label class="custom-control-label" for="checkbox">
                            I agree to Dashlite{" "}
                            <a tabindex="-1" href="#">
                              Privacy Policy
                            </a>{" "}
                            &amp;{" "}
                            <a tabindex="-1" href="#">
                              {" "}
                              Terms.
                            </a>
                          </label>
                        </div>
                      </div>
                      <div class="form-group">
                        <button class="btn btn-lg btn-primary btn-block">
                          Register
                        </button>
                      </div>
                    </form>
                    <div class="form-note-s2 pt-4">
                      {" "}
                      Already have an account ?{" "}
                      <Link href="/login">
                        <strong>Sign in instead</strong>
                      </Link>
                    </div>
                    {/* <div class="text-center pt-4 pb-3">
                      <h6 class="overline-title overline-title-sap">
                        <span>OR</span>
                      </h6>
                    </div>
                    <ul class="nav justify-center gx-8">
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          Facebook
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          Google
                        </a>
                      </li>
                    </ul> */}
                  </div>
                  <LoginFooter />
                </div>
                <LoginSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
