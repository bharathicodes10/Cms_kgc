import React from "react";
import { Form, Input } from "antd";

export default function BudgetForm({ isUpdateForm = false }) {
  return (
    <>
    
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
        label="Total Sqft"
        name="totalsqft"
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
