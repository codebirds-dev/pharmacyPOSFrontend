import dynamic from "next/dynamic";
import LoginFooter from "@/components/Common/LoginFooter";
import LoginSlider from "@/components/Common/LoginSlider";
import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const RegisterForm = dynamic(
  () => import("@/components/Reigster/RegisterForm"),
  { ssr: false }
);

const Index = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [checkTerms, setCheckTerms] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  useEffect(() => {
    setIsRendered(true);
  }, []);
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
      <div className="nk-app-root">
        <div className="nk-main ">
          <div className="nk-wrap nk-wrap-nosidebar">
            <div className="nk-content ">
              <div className="nk-split nk-split-page nk-split-lg">
                <div className="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white w-lg-45">
                  <div className="absolute-top-right d-lg-none p-3 p-sm-5">
                    <a
                      href="#"
                      className="toggle btn btn-white btn-icon btn-light"
                      data-target="athPromo"
                    >
                      <em className="icon ni ni-info"></em>
                    </a>
                  </div>
                  <div className="nk-block nk-block-middle nk-auth-body">
                    <div className="brand-logo pb-5">
                      <Link href="/" className="logo-link">
                        <img
                          className="logo-light logo-img logo-img-lg"
                          src="/assets/images/logo.png"
                          srcSet="/assets/images/logo2x.png 2x"
                          alt="logo"
                        />
                        <img
                          className="logo-dark logo-img logo-img-lg"
                          src="/assets/images/logo-dark.png"
                          srcSet="/assets/images/logo-dark2x.png 2x"
                          alt="logo-dark"
                        />
                      </Link>
                    </div>
                    <div className="nk-block-head">
                      <div className="nk-block-head-content">
                        <h5 className="nk-block-title">Register</h5>
                        <div className="nk-block-des">
                          <p>Create New Dashlite Account</p>
                        </div>
                      </div>
                    </div>
                    <RegisterForm onFinish={onFinish} />
                    <div className="form-note-s2 pt-4">
                      {" "}
                      Already have an account ?{" "}
                      <Link href="/login">
                        <strong>Sign in instead</strong>
                      </Link>
                    </div>
                    {/* <div className="text-center pt-4 pb-3">
                      <h6 className="overline-title overline-title-sap">
                        <span>OR</span>
                      </h6>
                    </div>
                    <ul className="nav justify-center gx-8">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Facebook
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
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
