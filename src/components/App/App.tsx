import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";
import SearchBar from "../SearchBar/SearchBar";
import { fetchGallery, Image } from "../../fetchApi";
import toast, { Toaster } from "react-hot-toast";

import { useState, useEffect } from "react";
import css from "./App.module.css";

function App() {
  const [foto, setFoto] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectFoto, setSelectFoto] = useState<Image | null>(null);
  const [endOfCollection, setEndOfCollection] = useState<boolean>(false);

  const openModal = (photo: Image): void => {
    setSelectFoto(photo);
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    setSelectFoto(null);
  };

  useEffect(() => {
    if (query === "") return;

    async function fetchData(): Promise<void> {
      try {
        setIsError(false);
        setLoading(true);

        const data = await fetchGallery(query, page);
        const resultsData = data.results;
        setFoto((prev) => {
          return [...prev, ...resultsData];
        });

        if (
          resultsData.length === 0 ||
          resultsData.length + foto.length >= data.total
        ) {
          toast("No more images to load.");
          setEndOfCollection(true);
        }
      } catch {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  const handleSubmit = (topic: string): void => {
    setPage(1);
    setQuery(topic);
    setEndOfCollection(false);
    setFoto([]);
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSubmit} toast={toast} />
      {isError && <ErrorMessage />}
      {foto.length > 0 && <ImageGallery images={foto} getImage={openModal} />}
      {loading && <Loader loading={loading} />}
      {foto.length > 0 && !loading && !endOfCollection && (
        <LoadMoreBtn setPage={setPage} pageCount={page} />
      )}

      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          onClose={closeModal}
          photo={selectFoto}
        />
      )}
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
