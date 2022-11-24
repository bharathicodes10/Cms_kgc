import React from "react";
import { Form, Input } from "antd";
import { DatePicker } from "@/components/CustomAntd";

export default function ProjectsForm({ isUpdateForm = false }) {
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
        label="address"
        name="address"
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
        label="clientName"
        name="clientName"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="leadName"
        name="leadName"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="budget"
        name="budget"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="startedOn"
        name="startedOn"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <DatePicker format={"DD/MM/YYYY"} />
      </Form.Item>
      <Form.Item
        label="completedOn"
        name="completedOn"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <DatePicker format={"DD/MM/YYYY"} />
        
      </Form.Item>
    </>
  );
}
