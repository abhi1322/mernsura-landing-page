import React from "react";
import { FiDownload, FiArrowRight, FiPlay } from "react-icons/fi";
import Button from "./Button";

const ButtonExample = () => {
  return (
    <div className="space-y-4 p-4">
      <h2 className="text-2xl font-bold mb-4">Button Component Examples</h2>

      {/* Basic buttons */}
      <div className="space-x-2">
        <Button>Default Button</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
      </div>

      {/* Buttons with icons */}
      <div className="space-x-2">
        <Button icon={FiDownload}>Download</Button>
        <Button icon={FiArrowRight} iconPosition="right">
          Get Started
        </Button>
        <Button icon={FiPlay} variant="outline">
          Watch Demo
        </Button>
      </div>

      {/* Different sizes */}
      <div className="space-x-2">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>

      {/* States */}
      <div className="space-x-2">
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
      </div>

      {/* Full width */}
      <div className="w-64">
        <Button fullWidth>Full Width Button</Button>
      </div>
    </div>
  );
};

export default ButtonExample;
