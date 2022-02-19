---
title: 1341.water
categories:
  - JZOJ
  - JZ初中OJ
tags:
  - OJ
---

时间限制: 1000 ms  空间限制: 131072 KB 

## 题目描述

全球气候变暖，小镇A面临水灾。于是你必须买一些泵把水抽走。泵的抽水能力可以认为是无穷大，但你必须把泵放在合适的位置，从而能使所有的水能流到泵里。小镇可以认为是N * M的矩阵。矩阵里的每个单元格都是一个‘a’- ‘z’小写字母，该小写字母表示该格子的高度，字母大的表示该单元格比较高，反之，表示该格子高度比较低。当前单元格的水可以流到上、下、左、右四个格子，但必须满足这些格子的高度是小于或者等于当前格子的高度。现在，给你一些N * M的矩阵，你至少要买多少个泵，才能把所有格子的水都能被抽走？



## 输入

 多组测试数据。

 第一行：K，表示有K组测试数据。 1 <= K <= 5.

 接下来有K组测试数据，每组测试数据格式如下：

 第一行：两个正数, N , M . 1 <= N, M <= 50，表示小镇的大小。

 接下来有N行，每行有M个小写字母，表示小镇的地图。

## 输出

共K行，每行对应一组数据。至少要买多少个泵，才能把所有格子的水都能抽走。

## 样例输入

 

## 样例输出

 

## 数据范围限制

 

## 提示

 

| 输入 | 2 5 5  ccccc  cbbbc  cbabc  cbbbc  ccccc  4 9  cbabcbabc  cbabcbabc  cbabcbabc  cbabcbabc | 1  11   11  ccccccccccc  caaaaaaaaac  caaaaaaaaac  caazpppzaac  caapdddpaac  caapdddpaac  caapdddpaac  caazpppzaac  caaaaaaaaac  caaaaaaaaac  ccccccccccc |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 输出 | 1 2                                                          | 2                                                            |

## 代码

```cpp
#include <bits/stdc++.h>
using namespace std;
int n,m;
char a[53][53];
bool bj[53][53];
int xi[]={0,0,-1,1};
int yi[]={1,-1,0,0};
void dfs(int x,int y)
{
    bj[x][y]=true;
    for(int i=0;i<4;i++)
    {
        int x1=x+xi[i];
        int y1=y+yi[i];
        if(x1<=n && x1>0 && y1<=m && y1>0 && bj[x1][y1]==false && a[x1][y1]>=a[x][y]){
        dfs(x1,y1);
    }
}}
int main()
{
    int k=0;
    cin>>k;
    while(k--)
    {
        memset(bj,false,sizeof bj);
        cin>>n>>m;
        for(int i=1;i<=n;i++)
            {
                for(int j=1;j<=m;j++)
                cin>>a[i][j];
            }
        int ans=0;
        for(char c='a';c<='z';c++){
            for(int i=1;i<=n;i++){
                for(int j=1;j<=m;j++){
                    if(bj[i][j]==false && a[i][j]==c)
                        {
                            dfs(i,j);
                            ans++;
                        }
                    }
                }
            }
        cout<<ans<<endl;
    }
}
```

