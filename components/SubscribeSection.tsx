"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { fetchFormFields } from "@/services/fetchFormFields";
import { handleSubmitForm } from "@/services/handleSubmitsubs";

interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  placeholder?: string;
}

interface Form {
  id: number;
  title: string;
  status: string;
  description: string;
  title_slug: string;
}

interface FormResponse {
  success: boolean;
  form: Form;
  fields: FormField[];
}

interface ContactFormValues {
  [key: string]: string;
}

export default function SubscribeSection() {
  const [fields, setFields] = useState<FormField[]>([]);
  const [formTitle, setFormTitle] = useState<string>("Subscribe");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadForm = async () => {
      try {
        const res = await fetchFormFields(
          { host: "localhost:3000" },
          "83a54509-3efe-4e4d-abf3-b3ef48f79739"
        );
        const data = res as FormResponse;
        if (data?.success) {
          setFields(data.fields);
          setFormTitle(data.form?.title || "Subscribe");
        }
      } catch (err) {
        console.error("Error fetching form fields:", err);
      }
    };
    loadForm();
  }, []);

  // ✅ Email validation function (Gmail only, ending must have at least 2 letters)
  const validateEmail = (email: string) => {
    // Pattern: must end with @gmail.com / @gmail.in / @gmail.co etc.
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.[a-zA-Z]{2,}$/;
    return gmailPattern.test(email);
  };

  // ✅ General validation
  const validateForm = (data: ContactFormValues) => {
    for (const key in data) {
      if (data[key].trim() === "") {
        alert(`Please fill in ${key}`);
        return false;
      }
    }

    // Check email field if exists
    const emailKey = Object.keys(data).find(
      (k) => k.toLowerCase().includes("email") // handles names like "Email", "user_email" etc.
    );
    if (emailKey && !validateEmail(data[emailKey])) {
      alert("Please enter a valid Gmail address (e.g. example@gmail.com)");
      return false;
    }

    return true;
  };

  const handleSubmitsubs = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    const dataObj: ContactFormValues = {};
    formData.forEach((value, key) => {
      dataObj[key] = String(value);
    });

    if (!validateForm(dataObj)) return;

    try {
      setLoading(true);
      const host = window.location.host;
      const res = await handleSubmitForm(host, dataObj);
      alert("✅ successfully submitted your subscription!");
      formElement.reset();
      console.log("Response:", res);
    } catch (err) {
      console.error("❌ Error submitting form:", err);
      alert("Failed to submit form. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-lg-8 col-sm-12 footer-col-4">
      <form
        role="form"
        onSubmit={handleSubmitsubs}
        className="bg-primary p-a20 text-white m-t15"
      >
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h2 className="m-tb0 font-40">{formTitle}</h2>
          </div>

          <div className="col-lg-8 col-md-6 col-sm-12">
            <div className="m-tb16">
              <ul className="dez-social-icon border dez-social-icon-lg">
                <li>
                  <Link
                    href="https://www.facebook.com/TopGunShootingAcademy"
                    className="fb-btn"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    {/* <i className="fa fa-facebook" /> */}
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/TopGunIndia"
                    className="tw-btn"
                    target="_blank"
                    aria-label="Twitter"
                  >
                    {/* <i className="fa fa-twitter" /> */}
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/topgun.co"
                    className="link-btn"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    {/* <i className="fa fa-linkedin" /> */}
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ✅ Dynamic Fields */}
        {fields.map((field, idx) => (
          <div className="m-b15" key={idx}>
            <input
              type={field.type || "text"}
              name={field.name}
              required={field.required}
              placeholder={field.placeholder || field.label}
              className="form-control"
            />
          </div>
        ))}

        <div>
          <button
            type="submit"
            disabled={loading}
            className="site-button button-3d gray btn-block"
          >
            <span>{loading ? "Submitting..." : "Submit"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
