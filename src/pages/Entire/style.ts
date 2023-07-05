import { styled } from "styled-components";

export const EntireWapper = styled.div`
  
`
type MyFunc<T extends (...args: any[]) => any> = T;

function myHome<T extends (...args: any[]) => any>(fn: MyFunc<T>, ...args: Parameters<T>) {
  // 在此处执行逻辑，例如调用传入的函数
  fn(...args);
}

// 定义一个示例函数，在参数中有一个名为 url 的字符串参数和一个名为 params 的对象参数
function exampleFunc(url: string, params: { size: number }) {
  console.log(`URL: ${url}`);
  console.log(`Params: ${params.size}`);
}

// 调用示例
const dynamicUrl = "example.com";
const dynamicParams = { size: 10 };

myHome(exampleFunc, dynamicUrl, dynamicParams);