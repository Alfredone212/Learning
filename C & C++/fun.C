#include <stdio.h>
#include <stdlib.h>


int max(int num1, int num2, int num3);

int main()
{
    printf("%d", max(40, 10, 50));
    if(3 < 2 || 2 > 5) {
        printf("\nTrue");
    } else {
        printf("\nFalse");
    }
    return 0;
}

int max(int num1, int num2, int num3) {
    int result;

    if(num1 >= num2 && num1 >= num3) {
        result = num1;
    } else if(num2 >= num1 && num2 >= num3) {
        result = num2;
    } else {
        result = num3;
    }

    return result;
}