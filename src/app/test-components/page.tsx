'use client';

import { Button } from '@/components/Button';
import { useState } from 'react';

export default function TestComponents() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="p-8">
      <h1 className="mb-8 text-2xl font-bold">Component Test Page</h1>

      <div className="space-y-4">
        <div>
          <h2 className="mb-2 text-lg font-semibold">Button Component</h2>
          <div className="flex gap-4">
            <Button onClick={() => setClickCount(clickCount + 1)}>
              Clicked {clickCount} times
            </Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button disabled>Disabled Button</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
