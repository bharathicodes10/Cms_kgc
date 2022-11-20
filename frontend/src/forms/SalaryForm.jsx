import React from "react";
import { Form, Input } from "antd";

export default function SalaryForm({ isUpdateForm = false }) {
  return (
    <>
    
      <Form.Item
      
        label="Laborer Name"
        name="laborerName"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
        
        <Form.Item
        label="Project Name"
        name="projectName"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="totalSqft"
        name="totalSqft"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="weeklypay"
        name="weeklyPay"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        label="salary"
        name="salary"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
    
    </>
  );
}
