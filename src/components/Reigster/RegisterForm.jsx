import dynamic from "next/dynamic";
import { Button, Form, Input } from "antd";
import React from "react";
const TermsCheckbox = dynamic(
  () => import("@/components/Common/TermsCondition"),
  {
    ssr: false,
  }
);

const RegisterForm = ({ onFinish }) => {
  const [form] = Form.useForm();
  return (
    <>
      <Form
        action=""
        className="form-validate is-alter"
        // autocomplete="off"
        onFinish={onFinish}
        size="large"
        form={form}
      >
        <div className="form-group">
          <div className="form-label-group">
            <label className="form-label" htmlFor="firstName">
              First Name
            </label>
            <a className="link link-primary link-sm" tabIndex="-1" href="#">
              Need Help?
            </a>
          </div>
          <div className="form-control-wrap">
            <Form.Item
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "Please enter first name!",
                },
              ]}
            >
              <Input
                className="form-control form-control-lg"
                style={{ borderRadius: "5px" }}
                placeholder="Enter your first name"
              />
            </Form.Item>
          </div>
        </div>
        <div className="form-group">
          <div className="form-label-group">
            <label className="form-label" htmlFor="lastName">
              Last Name
            </label>
            <a className="link link-primary link-sm" tabIndex="-1" href="#">
              Need Help?
            </a>
          </div>
          <div className="form-control-wrap">
            <Form.Item
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Please enter last name!",
                },
              ]}
            >
              <Input
                className="form-control form-control-lg"
                style={{ borderRadius: "5px" }}
                placeholder="Enter your last name"
              />
            </Form.Item>
          </div>
        </div>
        <div className="form-group">
          <div className="form-label-group">
            <label className="form-label" htmlFor="email">
              Email Adress
            </label>
            <a className="link link-primary link-sm" tabIndex="-1" href="#">
              Need Help?
            </a>
          </div>
          <div className="form-control-wrap">
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter last name!",
                },
              ]}
            >
              <Input
                className="form-control form-control-lg"
                style={{ borderRadius: "5px" }}
                placeholder="Enter your last name"
                type="email"
              />
            </Form.Item>
          </div>
        </div>
        <div className="form-group">
          <div className="form-label-group">
            <label className="form-label" htmlFor="phone">
              Phone
            </label>
            <a className="link link-primary link-sm" tabIndex="-1" href="#">
              Need Help?
            </a>
          </div>
          <div className="form-control-wrap">
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please enter phone number!",
                },
              ]}
            >
              <Input
                className="form-control form-control-lg"
                style={{ borderRadius: "5px" }}
                placeholder="Enter your phone number"
                type="phone"
              />
            </Form.Item>
          </div>
        </div>
        <div className="form-group">
          <div className="form-label-group">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <a
              className="link link-primary link-sm"
              tabIndex="-1"
              href="html/pages/auths/auth-reset.html"
            >
              Forgot Code?
            </a>
          </div>
          <div className="form-control-wrap">
            <a
              tabIndex="-1"
              href="#"
              className="form-icon form-icon-right passcode-switch lg"
              data-target="password"
            >
              <em className="passcode-icon icon-show icon ni ni-eye"></em>
              <em className="passcode-icon icon-hide icon ni ni-eye-off"></em>
            </a>
            {/* <input
                            autocomplete="new-password"
                            type="password"
                            className="form-control form-control-lg"
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
                className="form-control form-control-lg"
                style={{ borderRadius: "5px" }}
                placeholder="Enter your passcode"
              />
            </Form.Item>
          </div>
        </div>
        {/* <div className="form-group">
                        <div className="custom-control custom-control-xs custom-checkbox">
                          {isRendered && (
                            <Checkbox
                              checked={checkTerms}
                              onChange={(e) => setCheckTerms(e.target.checked)}
                              className="custom-checkbox"
                            >
                              <TermsCheckbox />
                            </Checkbox>
                          )}
                        </div>
                      </div> */}
        <div className="form-group">
          <Button
            htmlType="submit"
            type="primary"
            className="btn btn-lg btn-primary btn-block"
          >
            Register
          </Button>
        </div>
      </Form>
    </>
  );
};

export default RegisterForm;
