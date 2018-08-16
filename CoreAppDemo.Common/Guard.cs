namespace CoreAppDemo.Common
{
    public static class Guard
    {
        public static bool IsNull<T>(this T o) where T : class
        {
            return o == null;
        }
    }
}