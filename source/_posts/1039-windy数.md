---
title: 1039.windy数
categories:
  - JZOJ
  - JZ高中OJ
tags:
  - OJ
---

Time Limits: 1000 ms  Memory Limits: 65536 KB  

## Description

windy定义了一种windy数。
不含前导零且相邻两个数字之差至少为2的正整数被称为windy数。
windy想知道，在A和B之间，包括A和B，总共有多少个windy数？



## Input

两个整数，A B。

## Output

一个整数，表示A~B中有多少个windy数。

## Sample Input

```
1 10
```

## Sample Output

```
9
```

## Data Constraint

 

## Hint

100%的数据，满足 1 <= A <= B <= 2000000000 。

## Code

```cpp
#include<bits/stdc++.h>
using namespace std;
int num[11],dp[11][11];
inline int read()
{
  char ch=getchar();int num=0;
  while(ch<'0'||ch>'9')ch=getchar();
  while(ch>='0'&&ch<='9'){
    num=num*10+ch-'0';ch=getchar();}
  return num;
}
inline int Abs(int x)
{
  return x>0?x:-x;
}
inline int dfs(int len,int las,bool top,bool zero)
{
  if(len==0)return 1;
  if(!top&&!zero&&dp[len][las]!=-1)
    return dp[len][las];
  int cnt=0,maxx=(top?num[len]:9);
  for(int i=0;i<=maxx;i++){
    if(Abs(i-las)<2)continue;
    int p=i;if(zero&&i==0)p=-555;
    cnt+=dfs(len-1,p,top&&(i==maxx),(p==-555));
  }
  if(!zero&&!top)
      dp[len][las]=cnt;
  return cnt;
}
inline int work(int x)
{
  int tot=0;
  while(x){
      num[++tot]=x%10;
    x/=10;
    }
  memset(dp,-1,sizeof(dp));
  return dfs(tot,-555,true,true);
}
int main()
{
  int x=read();
  int y=read();
  printf("%d",work(y)-work(x-1));
  return 0;
}
```

