import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const AddColor = () => {
  const [colorName, setColorName] = useState('');
  const [colorCode, setColorCode] = useState('#000000');
  const [order, setOrder] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name: colorName,
      code: colorCode,
      order: Number(order),
    };

    console.log('Submitted Color Data:', payload);
    // Call your API endpoint here (e.g., axios.post('/api/colors', payload))
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Add Colors</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Color Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Color Name
            </label>
            <input
              type="text"
              required
              value={colorName}
              onChange={(e) => setColorName(e.target.value)}
              placeholder="Enter Color Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm"
            />
          </div>

          {/* Color Picker & Preview */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Color Picker
            </label>
            <div className="flex items-start gap-4">
              <SketchPicker
                color={colorCode}
                onChangeComplete={(color) => setColorCode(color.hex)}
                disableAlpha={false}
              />
              {/* Color Swatch Preview */}
              <div
                className="w-10 h-10 rounded-md border border-gray-300 shadow-inner shrink-0"
                style={{ backgroundColor: colorCode }}
                title={colorCode}
              />
            </div>
          </div>

          {/* Order */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Order
            </label>
            <input
              type="number"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
              placeholder="Enter Order"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-medium text-sm rounded-md transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Add Color
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddColor;