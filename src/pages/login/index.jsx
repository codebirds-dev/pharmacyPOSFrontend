import LoginFooter from "@/components/Common/LoginFooter";
import LoginSlider from "@/components/Common/LoginSlider";
import { setUser } from "@/redux/features/authSlice";
import requestHandler from "@/services/requestHandler";
import { Form, Input } from "antd";
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
    let { username, password } = values;
    console.log("Success: ", values);
    setIsLoading(true);
    try {
      let result = await requestHandler("POST", "auth/login", {
        username,
        password,
      });
      dispatch(setUser(result?.data));
      router.push("/dashboard");
    } catch (error) {
      console.error("Login error: ", error);
      setIsLoading(false);
    }
  };
  return (
    <>
      <div class="nk-app-root">
        <div class="nk-main ">
          <div class="nk-wrap nk-wrap-nosidebar">
            <div class="nk-content ">
              <div class="nk-split nk-split-page nk-split-lg">
                <div class="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white">
                  <div class="absolute-top-right d-lg-none p-3 p-sm-5">
                    <a
                      href="#"
                      class="toggle btn-white btn btn-icon btn-light"
                      data-target="athPromo"
                    >
                      <em class="icon ni ni-info"></em>
                    </a>
                  </div>
                  <div class="nk-block nk-block-middle nk-auth-body">
                    <div class="brand-logo pb-5">
                      <a href="html/index.html" class="logo-link">
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
                      </a>
                    </div>
                    <div class="nk-block-head">
                      <div class="nk-block-head-content">
                        <h5 class="nk-block-title">Sign-In</h5>
                        <div class="nk-block-des">
                          <p>
                            Access the DashLite panel using your email and
                            passcode.
                          </p>
                        </div>
                      </div>
                    </div>
                    <Form
                      action="#"
                      class="form-validate is-alter"
                      autocomplete="off"
                      onFinish={onFinish}
                      size="large"
                      form={form}
                    >
                      <div class="form-group">
                        <div class="form-label-group">
                          <label class="form-label" for="email-address">
                            Email or Username
                          </label>
                          <a
                            class="link link-primary link-sm"
                            tabindex="-1"
                            href="#"
                          >
                            Need Help?
                          </a>
                        </div>
                        <div class="form-control-wrap">
                          {/* <input
                            autocomplete="off"
                            type="text"
                            class="form-control form-control-lg"
                            required
                            id="email-address"
                            placeholder="Enter your email address or username"
                          /> */}
                          <Form.Item
                            name="username"
                            rules={[
                              {
                                required: true,
                                message: "Please enter username!",
                              },
                            ]}
                          >
                            <Input
                              class="form-control form-control-lg"
                              style={{ borderRadius: "5px" }}
                              placeholder="Enter your email address or username"
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="form-label-group">
                          <label class="form-label" for="password">
                            Password
                          </label>
                          <a
                            class="link link-primary link-sm"
                            tabindex="-1"
                            href="html/pages/auths/auth-reset.html"
                          >
                            Forgot Code?
                          </a>
                        </div>
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
                          {/* <input
                            autocomplete="new-password"
                            type="password"
                            class="form-control form-control-lg"
                            required
                            id="password"
                            placeholder="Enter your passcode"
                          /> */}
                          <Form.Item
                            name="password"
                            rules={[
                              {
                                required: true,
                                message: "Please enter your password!",
                              },
                            ]}
                          >
                            <Input.Password
                              class="form-control form-control-lg"
                              style={{ borderRadius: "5px" }}
                              placeholder="Enter your passcode"
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div class="form-group">
                        <button
                          class="btn btn-lg btn-primary btn-block"
                          type="submit"
                        >
                          Sign in
                        </button>
                      </div>
                    </Form>
                    <div class="form-note-s2 pt-4">
                      {" "}
                      New on our platform?{" "}
                      <Link href="/register">Create an account</Link>
                    </div>
                    {/* <div class="text-center pt-4 pb-3">
                      <h6 class="overline-title overline-title-sap">
                        <span>OR</span>
                      </h6>
                    </div>
                    <ul class="nav justify-center gx-4">
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
                    </ul>
                    <div class="text-center mt-5">
                      <span class="fw-500">
                        I don't have an account?{" "}
                        <a href="#">Try 15 days free</a>
                      </span>
                    </div> */}
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
