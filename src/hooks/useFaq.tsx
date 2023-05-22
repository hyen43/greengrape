import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

function useFaq() {
  const { data, error } = useSWR(
    () => 'http://localhost:3000/data/faqData.json',
    fetcher,
  );

  if (error) {
    console.log('faq 데이터를 불러오는데 에러가 생겼습니다.');
  }
  return { Faq: data, FaqError: error };
}

// eslint-disable-next-line import/prefer-default-export
export { useFaq };
