"use client";
import * as Select from "@radix-ui/react-select";
import * as Form from "@radix-ui/react-form";

export default function RadixSelect() {
  return (
    <>
      <div className="flex items-center gap-2">
        <Select.Root>
          <Select.Trigger>Bangladesh</Select.Trigger>
          <Select.Portal>
            <Select.Content>
              <Select.Viewport>
                <Select.Item>3</Select.Item>
                <Select.Item>1</Select.Item>
                <Select.Item>2</Select.Item>
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>

        <Form.Root>
          <Form.Field name="country">
            <Form.Control
              type="text"
              className="bg-gray w-full py-5 px-2 rounded-lg text-white my-2"
            />
          </Form.Field>
        </Form.Root>
      </div>
    </>
  );
}

const data = ["featured", "newest", "price high - low", "price low - high"];
