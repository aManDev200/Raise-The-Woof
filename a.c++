#include<iostream>
using namespace std;

int main()
{
int n;
cout <<"Enter the size of array: ";
cin >> n;
int arr[n];
int i, sum = 0;
cout <<"Enter the elements of array: ";
for(i = 0; i < n; i++)
{
cin >> arr[i];
}

for(i = 0; i < n; i++)
sum = sum + arr[i];
cout <<"The sum is :"<< sum;
return 0;
}


