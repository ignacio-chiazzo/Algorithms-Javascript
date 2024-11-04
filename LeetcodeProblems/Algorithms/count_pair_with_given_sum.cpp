#include <bits/stdc++.h>
using namespace std;
int getPairsCount(int arr[], int n, int sum)
{
	int count = 0; // Initialize result

	for (int i = 0; i < n; i++)
		for (int j = i + 1; j < n; j++)
			if (arr[i] + arr[j] == sum)
				count++;

	return count;
}

int main()
{
	int arr[] = { 1, 5, 7, -1, 5 };
	int n = sizeof(arr) / sizeof(arr[0]);
	int sum = 6;
	cout << "Count of pairs is "
		<< getPairsCount(arr, n, sum);
	return 0;
}

