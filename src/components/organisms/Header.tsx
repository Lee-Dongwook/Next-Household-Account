import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-blue-600">
          <Link href="/">MyLedger</Link>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium"
          >
            Home
          </Link>
          <Link
            href="/calendar"
            className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium"
          >
            Calendar
          </Link>
          <Link
            href="/transactions"
            className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium"
          >
            Transactions
          </Link>
          <Link
            href="/reports"
            className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium"
          >
            Reports
          </Link>
          <Link
            href="/settings"
            className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium"
          >
            Settings
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          {/* Add New Transaction */}
          <Link
            href="/transactions/new"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
          >
            + Add Transaction
          </Link>

          {/* Profile/Login */}
          <Link
            href="/login"
            className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-between items-center px-6 py-3 border-t">
        <Link
          href="/"
          className="text-gray-600 hover:text-blue-600 font-medium"
        >
          Home
        </Link>
        <Link
          href="/calendar"
          className="text-gray-600 hover:text-blue-600 font-medium"
        >
          Calendar
        </Link>
        <Link
          href="/transactions"
          className="text-gray-600 hover:text-blue-600 font-medium"
        >
          Transactions
        </Link>
        <Link
          href="/reports"
          className="text-gray-600 hover:text-blue-600 font-medium"
        >
          Reports
        </Link>
        <Link
          href="/settings"
          className="text-gray-600 hover:text-blue-600 font-medium"
        >
          Settings
        </Link>
      </div>
    </header>
  );
};
