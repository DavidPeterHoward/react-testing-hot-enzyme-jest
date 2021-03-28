
import React from 'react';
import { shallow, mount } from 'enzyme';
import puppeteer from "puppeteer";
import { toMatchImageSnapshot } from "jest-image-snapshot";
expect.extend({ toMatchImageSnapshot });

import App from './App';

// Smoke Test
it('renders without crashing', () => {
  shallow(<App />);
});

// Component Test
it("renders learn react link", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("a").text()).toEqual("Learn React");
});

// Snapshot Test
it("works", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

// UI Image Regression Tests
describe("jest-image-snapshot usage with an image received from puppeteer", () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  it("works", async () => {
    const page = await browser.newPage();
    await page.goto("http://localhost:3000");
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  afterAll(async () => {
    await browser.close();
  });
});
