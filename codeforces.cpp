#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    while (n--) {
        int x, y;
        cin >> x >> y;
        int ch_x = 0;
        int ch_y = 0;
        bool result = true;

        // If x is 0 and y is less than -1, it's impossible to reach the target
        if (x == 0 && y < -1) {
            cout << "NO" << endl;
            continue;
        }
        if(y < 0 && y - ch_y < -1){
            cout << "NO" << endl;
            continue;
        }
        while (ch_x != x && ch_y != y) {
            if ((x > 0 && ch_x > x) || (x < 0 && ch_x < x) || (y < 0 && y - ch_y < -1)) {
                result = false;
                break;
            }

            // Move towards the target x coordinate
            if (ch_x < x) {
                ch_x += 1;
            } else if (ch_x > x) {
                ch_x -= 1;
            }

            // Move towards the target y coordinate
             if (ch_y < y) {
                ch_y += 1;
            } else if (ch_y > y) {
                ch_y -= 1;
            }
            y--;
        }

        if (result) {
            cout << "YES" << endl;
        } else {
            cout << "NO" << endl;
        }
    }
    return 0;
}
