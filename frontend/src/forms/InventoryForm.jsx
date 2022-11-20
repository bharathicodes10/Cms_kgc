import React from "react";
import { Form, Input } from "antd";

export default function InventoryForm({ isUpdateForm = false }) {
  return (
    <>
    
      <Form.Item
      
        label="Article Name"
        name="articleName"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
        
        <Form.Item
        label="Vendor Name"
        name="vendorName"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="purchaseuom"
        name="purchaseuom"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="stockuom"
        name="stockuom"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Dept"
        name="dept"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Price"
        name="price"
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
